import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service: PaymentDetailService) {
   }
formdata = this.service.formData;
  ngOnInit() {
  }
  resetForm(form?: NgForm) {
    if (form != null) {
       form.resetForm();
       this.service.formData = {
         pmid: 0,
         CardOwner: '',
         CardNumber: '',
         ExpirationDate: '',
         cvv: ''
       };
    }
  }
  onSubmit(form: NgForm) {
    this.service.postPaymentDetail(form.value).subscribe(
      res => {
       // this.resetForm(form);
       console.log('successfulluy inserted');
      },
      err => {
        console.log(err);
      }
    );
  }

}
