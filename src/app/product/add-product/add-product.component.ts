import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
constructor(private fb:FormBuilder,private ps:ProductserviceService,private router:Router){ }

addProductForm=this.fb.group({

id :[''],
productName	:[''],
categoryId:[''],
description	:[''],
colour	:[''],
price	:[''],
productImage	:[''],
size	:['']
})
ngOnInit(): void{

}
addNewProduct(){
  
  let newProductData={
  
  id:this.addProductForm.value.id,
  productName:this.addProductForm.value.productName,
  categoryId:this.addProductForm.value.categoryId,
  description:this.addProductForm.value.description,
  colour:this.addProductForm.value.colour,
  price:this.addProductForm.value.price,
  productImage:this.addProductForm.value.productImage,
  size:this.addProductForm.value.size
  }
  this.ps.addProduct(newProductData).subscribe((item:any)=>{
    alert('product added')
    this.router.navigateByUrl('product')
  })
}
}
