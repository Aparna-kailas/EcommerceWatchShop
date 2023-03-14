import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
productid:any
productdata:any


  constructor(private ar:ActivatedRoute,private ps:ProductserviceService,private router:Router) {

  }

  ngOnInit():void{
    this.ar.params.subscribe((data:any)=>{
      this.productid=data["id"]
    })
    this.ps.viewproduct(this.productid).subscribe((item:any)=>{
    this.productdata=item
    })
  }
  updateProduct(form:any){
    let updateproduct={
      id:form.value.id,
      productName:form.value.productName ,
      categoryId:form.value.categoryId ,
      description:form.value.description ,
      colour: form.value.colour,
      price:form.value.price,
      productImage:form.value.productImage,
      size: form.value.size
    }
    this.ps.updateProduct(this.productid,this.productdata).subscribe((item:any)=>{
    alert('updated successfully')
    this.router.navigateByUrl('product')
    })
  }
                   
}
