  ionViewLoaded() {
    console.log('ionViewLoaded');
    // this.nav.setRoot(LoginPage); // Error!  
  }
  ngOnInit() {
    console.log('ngOnInit');
    // this.nav.setRoot(LoginPage); // 1
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    // this.nav.setRoot(LoginPage); // 2 
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit'); // 3
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    // this.nav.setRoot(LoginPage);  // 4
  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    // this.nav.setRoot(LoginPage);  // 5
  }