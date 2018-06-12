# extract-text-plugin-reproduction

-- npm install
-- npm run build (to generate production build)

#Issue Description
I am using dynamic import in order to create separate chunks with ExtractTextWebpackPlugin to create a copy of css.

With `maxLimit` option in `LimitChunkCountPlugin` set to `1`,
I am unable to generate final bundle of css.

With `maxLimit` to more than 1 css bundle is created.
Without the LimitCHunkCountPlugin also the bundle is created.
