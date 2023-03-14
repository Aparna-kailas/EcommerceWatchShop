import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  id:any
constructor(private ps:ProductserviceService,private ar:ActivatedRoute,private router:Router){

}
ngOnInit():void{
  this.ar.params.subscribe((data:any)=>{
  this.id=data["id"]
  })
  this.ps.deleteProduct(this.id).subscribe((data:any)=>{
  alert('product deleted')
  this.router.navigateByUrl('product')
  })
  }
}

