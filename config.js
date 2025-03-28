import StyleDictionary from 'style-dictionary';

const isHigherTierToken = (filePath) => {
    return filePath.includes('semantic') || filePath.includes('component');
};

StyleDictionary.registerFormat({
    name: 'css/custom-variables',
    format: function ({dictionary, platform}) {
        return `root {
${dictionary.allTokens.map((token) => {
    const tokenName = token.name.replace(`${platform.prefix}-`,``);
    if(isHigherTierToken(token.filePath)){
        return `--${platform.prefix}-semantic-${tokenName}: ${token.value};`
    }
    return ` --${platform.prefix}-${tokenName}: ${token.value};`
}).join(`\n`)}

}`
        }
    
    });


export default {
    "source": ["tokens/**/*.json"],
    "platforms": {
        "css":{
            "prefix": "playbook",
            "transformGroup": "css",
            "buildPath":"buid/css/",
            "files":[
                {
                    "destination": "_variables.css",
                    "format": "css/custom-variables"
                }
            ]
        }
    }
}