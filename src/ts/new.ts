// /**
//  * Created by yuki on 2016/09/26.
//  */
// class addDDO implements ng.IDirective {
//   scope = {};
//   restrict = 'E';
//   controller = addTaskController;
//   controllerAs = 'ctrl';
//   templateUrl = 'template/new.html';
// }
//
// class addTaskController {
//   public text:string;
//   private id: number;
//
//   public todos = [
//     {
//       id: 1,
//       text:'learn angular',
//       time: 'aaaaaaa',
//       done:true
//     },
//     {
//       id:2,
//       text:'build an angular app',
//       time: "aaaaaaaaaa",
//       done:false
//     }
//   ];
//
//   constructor() {
//     this.id = this.todos.length
//   }
//
//   //あとでtodoServiceに分ける｡
//   public add(): void {
//     this.todos.push({id:this.id++, text:this.text , time: this.getDate(), done:false});
//   }
//
//   public getDate(): string{
//     var date: Date= new Date();
//     return date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
//   }
//
//   public delete(): void{}
//
// }
//
// (function(){
//   angular
//     .module('app',['ui.router'])
//     .directive('addTask', () => new addDDO())
// })();