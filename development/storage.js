/**
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
