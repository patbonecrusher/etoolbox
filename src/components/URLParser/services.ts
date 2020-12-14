export function parseUrl(value: string) {
    const fragments: Map<string, string> = new Map();

    try {
        const url = new URL(value);

        fragments.set('host', url.host);
        fragments.set('protocol', url.protocol);
        fragments.set('hash', url.hash);
        fragments.set('origin', url.origin);
        fragments.set('pathname', url.pathname);
        fragments.set('port', url.port ? url.port : '<default>');
        fragments.set('search', url.search);

        const searchParams: URLSearchParams = url.searchParams;
        searchParams.forEach((value, key) => {
            fragments.set(`searchParam.${key}`, value);
        });

    } catch (e) {
        //  do nothing user may still be typing...
    }

    return fragments;
}