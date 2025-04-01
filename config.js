import StyleDictionary from 'style-dictionary';

const isHigherTierToken = (filePath) => {
  return filePath.includes('semantic') || filePath.includes('component');
};

// Utility to normalize token names by removing theme identifiers ("-light" or "-dark")
const normalizeTokenName = (tokenName) => {
  // This will replace "color-light-" or "color-dark-" with just "color-"
  return tokenName.replace(/(color)-(light|dark)-/, '$1-');
};

StyleDictionary.registerFormat({
  name: 'css/dual-theme-variables',
  format: function({ dictionary, platform }) {
    // Partition tokens based on the "theme" attribute.
    // Tokens without a theme attribute are considered common.
    const commonTokens = dictionary.allTokens.filter(
      token => !token.attributes || !token.attributes.theme
    );
    const lightTokens = dictionary.allTokens.filter(
      token => token.attributes && token.attributes.theme === 'light'
    );
    const darkTokens = dictionary.allTokens.filter(
      token => token.attributes && token.attributes.theme === 'dark'
    );

    // Helper function to map tokens to CSS custom property lines.
    const mapTokens = (tokens) =>
      tokens
        .map(token => {
          // Remove the platform prefix from the token name.
          let tokenName = token.name.replace(`${platform.prefix}-`, '');
          // Normalize the token name by stripping "-light" or "-dark"
          tokenName = normalizeTokenName(tokenName);
          // Optionally handle higher tier tokens differently.
          if (isHigherTierToken(token.filePath)) {
            return `  --${platform.prefix}-semantic-${tokenName}: ${token.value};`;
          }
          return `  --${platform.prefix}-${tokenName}: ${token.value};`;
        })
        .join('\n');

    return `
:root {
${mapTokens(commonTokens)}
}

.theme-light {
${mapTokens(lightTokens)}
}

.theme-dark {
${mapTokens(darkTokens)}
}
`.trim();
  }
});

export default {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      prefix: 'playbook',
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [
        {
          destination: '_variables.css',
          format: 'css/dual-theme-variables'
        }
      ]
    }
  }
};
