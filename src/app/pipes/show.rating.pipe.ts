import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "showrating"
})
export class ShowRating implements PipeTransform {
  transform(value: number): string {
    let ans: string = "";
    if (value < 2) {
      ans = "Not Bad";
    } else if (value === 3) {
      ans = "Average";
    } else if (value === 4) {
      ans = "Good";
    } else {
      ans = "Excellant";
    }

    return value.toString() + " :" + ans;
  }
}
