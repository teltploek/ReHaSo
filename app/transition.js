export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('calendar'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}