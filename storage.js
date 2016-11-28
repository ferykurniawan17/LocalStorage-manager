/**
 * @param {string} name
 * @constructor
 */
var LocalStorage = function (name) {

    /**
     * @type {string}
     * @private
     */
    this._name = name;

    this._data = {};
};

/**
 * @param {String} key
 * @param {object|array|string} value
 */
LocalStorage.prototype.create = function (key, value) {
    var storage = this.getObj();

    if (storage.hasOwnProperty(key)) {
        this.update(key, value);
        return;
    }

    storage[key] = value;

    localStorage[this._name] = JSON.stringify(storage);
};

/**
 * @param {=string} key
 */
LocalStorage.prototype.get = function (key) {

    var storage = this.getObj();

    if (storage !== null && key !== undefined) {
        return storage[key] ? storage[key] : null;
    }

    return storage;
};

/**
 * @param {string} key
 * @param {object|array|string} value
 */
LocalStorage.prototype.update = function (key, data) {
    var storage = this.getObj();

    if (storage.hasOwnProperty(key)) {
        var k;

        if (typeof data === 'string') {
            delete storage[key];
            storage[key] = data;
        }
        else {
            if (typeof storage[key] === 'string') {
                delete storage[key];
                storage[key] = data;
            }
            else {
                for (k in data) {
                    delete storage[key][k];
                    storage[key][k] = data[k];
                }
            }
        }
    }

    delete localStorage[this._name];
    localStorage[this._name] = JSON.stringify(storage);
};

/**
 * @param {=string} key
 */
LocalStorage.prototype.delete = function (key) {
    if (localStorage[this._name] !== undefined && key !== undefined) {
        var storage = this.getObj();
        if (storage.hasOwnProperty(key)) {
            delete storage[key];
            delete localStorage[this._name];
            localStorage[this._name] = JSON.stringify(storage);
        }
        return;
    }
    else if (localStorage[this._name] !== undefined) {
        delete localStorage[this._name];
    }


};

LocalStorage.prototype.getObj = function () {
    return localStorage[this._name] !== undefined ? JSON.parse(localStorage[this._name]) : {};
};/**
 * @constructor
 */
var Storage = function () {

    /**
     * @type {string}
     * @private
     */
    this._name = 'browserStorageManagement';
    this._init();
};

Storage.prototype._init = function () {
    /**
     * @type {boolean}
     * @private
     */
    this._isSupportLocalStorage = typeof(Storage) !== "undefined";

    this._storage = new LocalStorage(this._name);
    if (!this._isSupportLocalStorage) {
        console.log('Your browser not supported LocalStorage');
    }
};

/**
 * @param {string} key
 * @param {object|array|string} value
 */
Storage.prototype.create = function (key, value) {
    this._storage.create(key, value);
};

/**
 * @param {=string} key
 * @return {object|array|string}
 */
Storage.prototype.get = function (key) {
    return this._storage.get(key);
};

/**
 * @param {string} key
 * @param {object|array|string} value
 */
Storage.prototype.update = function (key, data) {
    this._storage.update(key, data);
};

/**
 * @param {=string} key
 */
Storage.prototype.delete = function (key) {
    this._storage.delete(key);
};

/**
 * @param {string} name
 */
Storage.prototype.setStorageName = function (name) {
    this._name = name;
    this._init();
};
window.lStorage = new Storage();