import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/providers/general-service.service';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pagina-inicio-admin',
  templateUrl: './pagina-inicio-admin.component.html',
  styleUrls: ['./pagina-inicio-admin.component.css']
})
export class PaginaInicioAdminComponent implements OnInit {

  cotizaciones: any[] = [];

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

//   generarPDF() {
//     this.isCreatingPDF = true; 

//     if (this.pdfContent) {
//       const content = this.pdfContent.nativeElement;
//       // Realiza las operaciones con "content" aquí
//       // Captura la vista en un lienzo usando html2canvas
//       html2canvas(content).then(canvas => {
//         // Obtén las dimensiones de la imagen capturada
//         const imgWidth = canvas.width;
//         const imgHeight = canvas.height;
//         // Crea un nuevo objeto jsPDF con las dimensiones de la imagen
//         const pdf = new jsPDF({
//           orientation: 'portrait', // Puedes cambiar a 'landscape' si es necesario
//           unit: 'mm',
//           format: [imgWidth, imgHeight] // Establece el tamaño del PDF según las dimensiones de la imagen
//         });
  
//         // Convierte el lienzo a una imagen base64
//         const imgData = canvas.toDataURL('image/png');
  
//         // Agrega la imagen al PDF
//         pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  
//         // Descarga el PDF con un nombre de archivo
//         pdf.save('Reporte.pdf');
        
//         this.isCreatingPDF = false; // Ocultar spinner de carga
//       });
//     } else {
//       console.error('El elemento pdfContent no está definido.');
//       
//     }
//   }
}
