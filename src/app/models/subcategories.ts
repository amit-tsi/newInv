
export interface SubcategoryWithCategory {
    subCategoryId: number;
    categoryId: number;
    categoryName: string;
    subCategoryName: string;
    description: string;
    isActive:boolean;
    isDeleted: boolean;
    createdBy: string;
    createdOn: Date;
    updatedBy: string;
    updatedOn: Date;
}