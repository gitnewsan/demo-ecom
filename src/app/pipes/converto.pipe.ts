import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "convertToHyphen"
})
export class ConvertToHyphen implements PipeTransform {
  transform(value: string, rep_character: string): string {
    return value.replace(rep_character, "-");
  }
}
