import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'assets/js/index.js',
    output: {
        file: 'public/js/index.js',
        format: 'iife',
        sourcemap: 'inline'
    },
    plugins: [nodeResolve({
        moduleDirectories: ['node_modules', 'assets/js']
    })]
};