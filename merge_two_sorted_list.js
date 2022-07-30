class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next)
    }

    static getListNode(arr) {
        if (!arr)
            return;
        var getNode = (index) => {
            if (index >= arr.length)
                return;
            return new ListNode(arr[index], getNode(index + 1));
        }
        return getNode(0);
    }
};

var mergeTwoLists = function (list1, list2) {
    let getVal = (current, next) => {
        if ((!current || current.val === undefined) && (!next || next.val === undefined))
            return;
        if (!current || current.val === undefined) {
            current = next;
            next = null;
        }

        if (next && next.val !== undefined && next.val < current.val) {
            var temp = current;
            current = next;
            next = temp;
        }

        return new ListNode(current.val, getVal(next, current.next));
    }

    return getVal(list1, list2) ?? null;
};