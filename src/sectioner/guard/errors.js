class ChildTypeError extends Error {}

export class ChildTypeDepth1 extends ChildTypeError {}

export class ChildTypeDepth2 extends ChildTypeError {}

export class ChildTypeNotAllowed extends ChildTypeError {}

class StructureError extends Error {}

export class TooManyOfType extends StructureError {}

export class TabsNotLinkedToSections extends StructureError {}
