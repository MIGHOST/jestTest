class syncFn {
    compact(arr) {
        return arr.filter(val=>!!val)
    }
}

module.exports = syncFn;