export interface Pomasters {
    poId: number;
    documentNumber: string;
    poNumber: string;
    description:string;
    item_GL_FA: string;
    hsn_SacCode: string;
    siteId: string;
    erpBankId: number;
    orderDate: Date;
    venderCode: string;
    orderQuantity: number;
    receiveQuantity: number;
    measuringUnitId: number;
   unitPrice: number;
    address: string;
    isActive: boolean;
    isDeleted: boolean;
}
