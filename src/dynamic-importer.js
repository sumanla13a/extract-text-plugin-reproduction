import React from 'react';
import Loadable from 'react-loadable';

export const ModuleLoadable = Loadable({
    loader: () => (
        import(
            /* webpackChunkName: "moduleImporter" */
            './module-to-import'
        )
    ),
    render: (loaded, props) => {
        console.log(loaded);
        const Component = loaded.moduleToImport;
        return <Component {...props} />;
    },
    loading: () => null
});
