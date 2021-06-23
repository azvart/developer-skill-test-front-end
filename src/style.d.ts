declare module "*.module.scss" {
  const classess: { [key: string]: string };
  export default classess;
}
declare module "*.svg" {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;

  export { ReactComponent };
  export default content;
}

declare module "flickrapi" {
  const Flickr: any;
  export default Flickr;
}
