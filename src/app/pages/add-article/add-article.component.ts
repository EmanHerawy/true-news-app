import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { I18n } from '@ngx-translate/i18n-polyfill';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { CookieService } from 'ngx-cookie';
import { ROUTES_CONFIG } from 'src/app/configs/routes.config';
import { UtilsHelperService } from 'src/app/shared/services/utils-helper.service';
import { DataService } from 'src/app/utils/data.service';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      params: { timing: 1, delay: 0 }
    }))])
  ],
  providers: [DataService]
})
export class AddArticleComponent implements OnInit {

  myForm: FormGroup;
  canVote = false;
  error: boolean;

  @ViewChild('form', { static: false }) myNgForm; // just to call resetForm method

  constructor(
    private dataSevice: DataService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private i18n: I18n,
    private fb: FormBuilder,
    private cookieService: CookieService,
    @Inject(ROUTES_CONFIG) public routesConfig: any) {
    //this.canVote = this.heroService.checkIfUserCanVote();

    this.myForm = this.fb.group({
      url: new FormControl('', [Validators.required]),
      tokenNum: new FormControl(10000, Validators.required)
    });


  }

  ngOnInit() {

  }

  onSave() {

  }


}

