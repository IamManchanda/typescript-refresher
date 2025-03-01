type RGB = 'r' | 'g' | 'b';
type Num = '1' | '2' | '3';

type Color = `${RGB}-${Num}`;
const color: Color = 'r-1';
console.log(color); // r-1

type InvoiceId = `Inv-${number}-${number}`;

const invoiceId: InvoiceId = 'Inv-2025-0001';
console.log(invoiceId); // Inv-2025-0001