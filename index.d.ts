interface Error {
  messageTemplate?: string;
  messageData?: {
    [key: string]: string
  };
}

interface MainInterface {
  handleSrouce(): void
  generateJsApiContent(source: []): string | false
}

interface YapiOptions {
  outputDir: string;
  fileName: string;
  localFilePath?: string;
  host?: string;
  token?: string;
  path?: string;
}

interface YapiListItem {
  path: string,
  title: string,
  project_id: string,
  _id: string,
  method: string,
}