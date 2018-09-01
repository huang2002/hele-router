
export function testRoute(pathname: string, path: string, exact = false) {
    return exact ? pathname === path : pathname.indexOf(path) >= 0;
}
