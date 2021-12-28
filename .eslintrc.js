module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
    },
    "settings": {
        "react": {
            "version": 'latest',
        },
    },
    "extends": [
        "plugin:react/recommended",
        "google"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'linebreak-style': 0,
        'require-jsdoc': 0,
        'max-len': ['error', {'code': 120}],
        'react/prop-types': 'off',
    }
};
