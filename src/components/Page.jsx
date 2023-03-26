import React from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';

const appName = 'Todo App';

export const Page = ({
                         children,
                         description,
                         elements,
                         keywords,
                         title
                     }) => (
    <HelmetProvider>
        <Helmet defaultTitle={appName} titleTemplate={`${appName} | %s`}>
            <meta name="description" content={description}/>
            {keywords && <meta name="keywords" content={keywords}/>}
            <title>{title}</title>
            {elements}
        </Helmet>
        {children}
    </HelmetProvider>
);
