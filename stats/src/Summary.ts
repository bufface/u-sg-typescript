import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTargeg {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarge: OutputTargeg) {}
}
