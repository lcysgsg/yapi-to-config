interface Error {
    messageTemplate?: string;
    messageData?: object;
}

interface MainInterface{
  handleSrouce(): void
  generateJsApiContent(source: []): string | false
}

interface YapiOptions {
    outputDir: string;
    fileName: string;
    localFilePath: string;
    path: string;
    host: string;
    token: string;
  }