import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'ksu-gdc-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Output() upload: EventEmitter<File> = new EventEmitter<File>();
  @Output() fileChange: EventEmitter<File> = new EventEmitter<File>();

  @Input('show-upload') set setShowUpload(bool: boolean) {
    this.showUpload = bool;
  }
  @Input('btn-text') set setBtnTitle(text: string) {
    this.btnText = text;
  }
  @Input('file-type') set setFileType(type: string) {
    this.fileType = type;
  }

  btnText: string;
  showUpload: boolean;
  fileType: string;

  file: File;
  isProcessing: boolean;

  constructor() { }

  ngOnInit() {
    if (typeof this.showUpload === 'undefined') {
      this.showUpload = true;
    }
  }

  setFile(fileInput: any): void {
    this.file = fileInput.target.files[0];
    this.fileChange.emit(this.file);
  }

  uploadFile(): void {
    this.upload.emit(this.file);
  }
}
