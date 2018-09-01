import rollupPluginBabel from "rollup-plugin-babel";

const input = 'raw/index.js',
    external = ['hele'];

export default [
    {
        input,
        external,
        output: {
            format: 'es',
            file: 'dist/hele-router.js'
        }
    },
    {
        input,
        external,
        plugins: [
            rollupPluginBabel()
        ],
        output: {
            format: 'umd',
            name: 'HEle',
            file: 'dist/hele-router.umd.js',
            extend: true,
            globals: {
                hele: 'HEle'
            }
        }
    }
];
