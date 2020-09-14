export default function (code) {
    if (/^[0-9]+$/.test(code)) {
        if (code.length === 4 || code.length === 6) {
            return true;
        }
    }
    return false;
}
