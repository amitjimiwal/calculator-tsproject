export interface btn{
         id:string,
         type:string,
         value:string
}

export interface methods{
         update:(input :string)=> void ;
         answer:()=> void;
         deleteItem:()=>void;
         reset:()=> void;
}