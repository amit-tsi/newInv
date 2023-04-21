export interface CategoriesWithProduct {
    categoryId:number;
    productName:string;
    productId:number;
    categoryName:string;
    description: string;
    isActive:boolean;
    isDeleted: boolean;
    createdBy: string;
    createdOn: Date;
    updatedBy: string;
    updatedOn: Date;
}
