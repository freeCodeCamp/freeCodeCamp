import { wrapMapToPropsConstant, wrapMapToPropsFunc } from './wrapMapToProps';
import { createInvalidArgFactory } from './invalidArgFactory';
export function mapStateToPropsFactory(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(() => ({})) : typeof mapStateToProps === 'function' ? // @ts-ignore
  wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : createInvalidArgFactory(mapStateToProps, 'mapStateToProps');
}