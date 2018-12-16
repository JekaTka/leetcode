const longestCommonPrefix = (strs) => {
    const sortedStrs = strs.sort();
    const length = sortedStrs.length;
    const first = sortedStrs[0];
    const last = sortedStrs[length - 1];
    let i = 0;

    while(i < length && first.charAt(i) === last.charAt(i)) i++;

    return first.substring(0, i);
};