import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  let component=AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule      
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    
  }));
  beforeEach(()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
  })

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  it(`should have as title 'my-app'`, () => {
    let Comp=new AppComponent()
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(Comp.title).toEqual('my-app');
  });

});
