export interface btn{
         id:string,
         type:string,
         value:string
}

export interface NumberbuttonSchema{
         value:string
         update:(input :string)=> void ;
}
export interface ResetButtonSchema{
         value:string;
         reset:()=> void;
}
export interface AnswerButtonSchema{
         value:string;
         answer:()=> void;
}
export interface DeletebuttonSchema{
         value:string
         deleteItem:()=>void;
}
export interface methods{
         update:(input :string)=> void ;
         answer:()=> void;
         deleteItem:()=>void;
         reset:()=> void;
}
