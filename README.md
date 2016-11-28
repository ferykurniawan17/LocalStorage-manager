# LocalStorage-manager

## How to use

```<script type="application/javascript" src="storage.min.js"></script>```

### change local storage name (optional) ###

```lStorage.setStorageName('YOUR_LOCAL_STORAGE_NAME');```

for make sure the local storage name is unique. by default the local storage name is `browserStorageManagement`

### How to create data storage ###

```lStorage.create('your_key_1', 'Your Value');```

or

```lStorage.create('your_key_2', [0, 2, 3]);```

or

```lStorage.create('your_key_3', {
    dataKey: 'value1'
  });```
  
### How to update existing data storage ###

```lStorage.update('your_key_1', 'Your value');```

### How to delete existing data storage ###

delete all data 
```lStorage.delete();```

delete by key
```lStorage.delete('your_key_1');```