import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pdf-attest',
  templateUrl: './pdf-attest.component.html',
  styleUrls: ['./pdf-attest.component.css'],
  providers: [DatePipe]
})
export class PdfAttestComponent implements OnInit {
  date: Date;
  localisation = null;
  currentLat = null;
  currentLong = null;
  url = null;
  image = new Image();
  ios: boolean = false;
  @ViewChild('signaturePad') signaturePad: SignaturePad;


  signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 2,
    'canvasWidth': 500,
    'canvasHeight': 300
  };

  constructor(public datepipe: DatePipe) {
  }


  ngOnInit() {
    this.date = new Date();
  }

  captureScreen() {
    var data = document.getElementById('contentToConvert');
    data.style.width = '1200px';
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4', 1); // A4 size page of PDF
      var position = 50;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      this.url = canvas.toDataURL();
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
          this.ios = true;
          this.image.name = 'ATTESTATION_DE_DÉPLACEMENT_DÉROGATOIRE-' + this.datepipe.transform(this.date, 'dd/MM/yyyy') + '.pdf';
          this.image.src = this.url;
        }
      pdf.save('ATTESTATION_DE_DÉPLACEMENT_DÉROGATOIRE-' + this.datepipe.transform(this.date, 'dd/MM/yyyy') + '.pdf'); // Generated PDF
      data.style.width = window.innerWidth + 'px';
    });
  }

  reset() {
    this.signaturePad.clear();
  }
}
