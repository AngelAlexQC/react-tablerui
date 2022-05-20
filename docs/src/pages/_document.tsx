/* eslint-disable @next/next/no-sync-scripts */
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import Script from 'next/script';

class MainDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body className="theme-light">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MainDocument;
