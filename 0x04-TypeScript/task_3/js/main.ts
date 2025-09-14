import { insertRow, updateRow, deleteRow } from './crud';
import { RowID, RowElement } from './interface';

const row: RowElement = {
 firstName: 'Guillaume',
 lastName: 'Salva'
};

const newRowID: RowID = insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };
updateRow(newRowID, updatedRow);
deleteRow(newRowID);