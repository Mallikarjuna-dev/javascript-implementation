// 1. Array Flattening.
function flattenArray(array, depth) {
    // console.log(array)
    function flatten(arr, curDepth) {
        if (curDepth === 0) {
            return arr;
        }

        let out = [];
        for (let el of arr) {
            if (Array.isArray(el)) {
                out = out.concat(flatten(el, curDepth - 1));
            } else {
                out.push(el);
            }
        }
        return out;
    }
    console.log(flatten(array, depth))
}

flattenArray([1, [2, [3, [4, 5]]]], 2);
// Output: [1, 2, 3, [4, 5]]
flattenArray([1, [2, [3, [4, 5]]]]);
// Output: [1, 2, 3, 4, 5]


// ------------------------------------ 2  -----------------------------------------
// 2. Object Flattening.
function flattenObject(object) {
    let out = {};

    function flatten(obj, outerKey) {

        for (let key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                let newKey = outerKey ? `${outerKey}.${key}` : key;

                if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
                    flatten(obj[key], newKey)
                } else {
                    out[newKey] = obj[key];
                }
            }
        }
    }
    flatten(object);
    console.log(out);
}

const input = {
    user: {
        info: {
            name: "Alice",
            age: 25
        },
        preferences: {
            theme: "dark",
            notifications: true
        }
    },
    status: "active"
};
// output
// {
//     'user.info.name': 'Alice',
//     'user.info.age': 25,
//     'user.preferences.theme': 'dark',
//     'user.preferences.notifications': true,
//     status: 'active'
// }

flattenObject(input);