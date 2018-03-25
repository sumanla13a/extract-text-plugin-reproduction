# extract-text-plugin-reproduction

-- npm install
-- npm run build (to generate production build)

#Issue Description
I am using dynamic import in order to create separate chunks with ExtractTextWebpackPlugin to create a copy of css.

With `maxLimit` set to `1`,
I am unable to generate final bundle of css.

WIthout maxLimit, it works fine.

