import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GeneralServiceService } from 'src/app/providers/general-service.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pagina-inicio-admin',
  templateUrl: './pagina-inicio-admin.component.html',
  styleUrls: ['./pagina-inicio-admin.component.css']
})
export class PaginaInicioAdminComponent implements OnInit {

  cotizaciones: any[] = [];
  isCreatingPDF = false;

  @ViewChild('reporte', { static: false }) pdfContent: ElementRef | undefined;

  constructor(private generalService: GeneralServiceService) { }

  ngOnInit(): void {
    this.obtenerCotizaciones();
  }

  obtenerCotizaciones(): void {
    this.generalService.getCotizaciones().subscribe(data => {
      if (data.success) {
        this.cotizaciones = data.data[0] as any;
        console.log(this.cotizaciones);
      }
    }, error => {
      console.error("Error obteniendo cotizaciones:", error);
    });
  }

  generarPDF() {
  this.isCreatingPDF = true;
  
  if (this.pdfContent) {
    const content = this.pdfContent.nativeElement;
      // Captura la vista en un lienzo usando html2canvas
      html2canvas(content).then(canvas => {
          // Obtiene las dimensiones de la imagen capturada
          const imgWidth = canvas.width;
          const imgHeight = canvas.height;

          // Dimensiones para un PDF en landscape (formato A4)
          const pdfWidth = 297; // en mm
          const pdfHeight = 210; // en mm
          
          // Escala la imagen para que se ajuste al PDF
          const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
          const scaledWidth = imgWidth * ratio;
          const scaledHeight = imgHeight * ratio;

          // Crea un nuevo objeto PDF con orientación landscape
          const pdf = new jsPDF({
              orientation: 'landscape',
              unit: 'mm',
              format: [pdfWidth, pdfHeight]
          });
          
          // Convierte el lienzo a una imagen base64
          const imgData = canvas.toDataURL('image/png');
          
          // Agrega la imagen al PDF
          pdf.addImage(imgData, 'PNG', 0, 0, scaledWidth, scaledHeight);
          
          // Descarga el PDF con un nombre de archivo
          pdf.save('Reporte.pdf');
      });
  } else {
      console.error('El elemento pdfContent no está definido.');
  }
}
}

