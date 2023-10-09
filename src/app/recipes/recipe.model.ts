export class RecipeModel{

   public Name:string;
   public ImagePath:string;
   public Description:string;

   constructor(name:string,description:string,imagePath:string){
       this.Name=name;
       this.Description=description;
       this.ImagePath=imagePath;

   }
}