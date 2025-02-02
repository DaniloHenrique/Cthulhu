import terser from '@rollup/plugin-terser';

export default {
    input:'src/index.js',
    plugins:[
        terser({
            keep_classnames:true,
            keep_fnames:true
        })
    ],
    output:[
        {
            file:'dist/index.js',
            format:'es'
        }
    ]
}