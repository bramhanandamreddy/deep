from collections.abc import Callable
from typing import Any

from django.db.models.base import Model
from django.db.models.fields import AutoField, Field
from django.db.models.fields.related import ForeignKey, OneToOneField, RelatedField
from django.db.models.lookups import BuiltinLookup, StartsWith
from django.db.models.query_utils import FilteredRelation, PathInfo
from django.db.models.sql.where import WhereNode

from .mixins import FieldCacheMixin

class ForeignObjectRel(FieldCacheMixin):
    many_to_many: bool
    many_to_one: bool
    one_to_many: bool
    one_to_one: bool
    auto_created: bool = ...
    concrete: bool = ...
    editable: bool = ...
    is_relation: bool = ...
    related_model: type[Model]
    null: bool = ...
    field: RelatedField[Any, Any] = ...
    model: type[Model] | str = ...
    related_name: str | None = ...
    related_query_name: str | None = ...
    limit_choices_to: dict[str, Any] | Callable[[], Any] | None = ...
    parent_link: bool = ...
    on_delete: Callable[..., Any] = ...
    symmetrical: bool = ...
    multiple: bool = ...
    field_name: str | None = ...
    def __init__(
        self,
        field: RelatedField[Any, Any],
        to: type[Model] | str,
        related_name: str | None = ...,
        related_query_name: str | None = ...,
        limit_choices_to: dict[str, Any] | Callable[[], Any] | None = ...,
        parent_link: bool = ...,
        on_delete: Callable[..., Any] | None = ...,
    ) -> None: ...
    @property
    def hidden(self) -> bool: ...
    @property
    def name(self) -> str: ...
    @property
    def remote_field(self) -> RelatedField[Any, Any]: ...
    @property
    def target_field(self) -> AutoField: ...
    def get_lookup(self, lookup_name: str) -> type[BuiltinLookup[Any]]: ...
    def get_internal_type(self) -> str: ...
    @property
    def db_type(self) -> Callable[..., Any]: ...
    def get_choices(
        self, include_blank: bool = ..., blank_choice: list[tuple[str, str]] = ...
    ) -> list[tuple[int, str]]: ...
    def is_hidden(self) -> bool: ...
    def get_joining_columns(self) -> tuple[Any, ...]: ...
    def get_extra_restriction(
        self, where_class: type[WhereNode], alias: str, related_alias: str
    ) -> StartsWith | WhereNode | None: ...
    def set_field_name(self) -> None: ...
    def get_accessor_name(self, model: type[Model] | None = ...) -> str | None: ...
    def get_path_info(
        self, filtered_relation: FilteredRelation | None = ...
    ) -> list[PathInfo]: ...

class ManyToOneRel(ForeignObjectRel):
    def __init__(
        self,
        field: ForeignKey[Any],
        to: type[Model] | str,
        field_name: str | None,
        related_name: str | None = ...,
        related_query_name: str | None = ...,
        limit_choices_to: dict[str, Any] | Callable[[], Any] | None = ...,
        parent_link: bool = ...,
        on_delete: Callable[..., Any] = ...,
    ) -> None: ...
    def get_related_field(self) -> Field[Any, Any]: ...

class OneToOneRel(ManyToOneRel):
    def __init__(
        self,
        field: OneToOneField[Any],
        to: type[Model] | str,
        field_name: str | None,
        related_name: str | None = ...,
        related_query_name: str | None = ...,
        limit_choices_to: dict[str, str] | None = ...,
        parent_link: bool = ...,
        on_delete: Callable[..., Any] = ...,
    ) -> None: ...

class ManyToManyRel(ForeignObjectRel):
    through: type[Model] | str | None = ...
    through_fields: tuple[str, str] | None = ...
    db_constraint: bool = ...
    def __init__(
        self,
        field: RelatedField[Any, Any],
        to: type[Model] | str,
        related_name: str | None = ...,
        related_query_name: str | None = ...,
        limit_choices_to: Any = ...,
        symmetrical: bool = ...,
        through: type[Model] | str | None = ...,
        through_fields: tuple[str, str] | None = ...,
        db_constraint: bool = ...,
    ) -> None: ...
    def get_related_field(self) -> Field[Any, Any]: ...