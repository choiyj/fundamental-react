import getSourceModule from '../utils/getSourceModule';
import { googlecode } from 'react-syntax-highlighter/styles/hljs';
import packageJson from '../../../../package.json';
import PropTypes from 'prop-types';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

export const Import = ({ sourceModulePath }) => {
    // remove everything up until the last forward slash and the file extension.
    const importPath = sourceModulePath.replace(/^(.*[\\\/])/, '').replace('.js', '');

    return (
        <SyntaxHighlighter
            customStyle={{ padding: 0 }}
            language='javascript'
            style={googlecode}>
            {`import { ${Object.keys(getSourceModule(sourceModulePath)).sort().join(', ')} } from '${packageJson.name}/lib/${importPath}';`}
        </SyntaxHighlighter>
    );
};

Import.propTypes = {
    sourceModulePath: PropTypes.string.isRequired
};
