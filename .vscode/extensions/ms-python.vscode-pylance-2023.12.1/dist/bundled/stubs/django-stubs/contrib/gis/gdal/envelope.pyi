from ctypes import Structure
from typing import Any

class OGREnvelope(Structure): ...

class Envelope:
    def __init__(self, *args: Any) -> None: ...
    def __eq__(self, other: object) -> Any: ...
    def expand_to_include(self, *args: Any) -> Any: ...
    @property
    def min_x(self) -> Any: ...
    @property
    def min_y(self) -> Any: ...
    @property
    def max_x(self) -> Any: ...
    @property
    def max_y(self) -> Any: ...
    @property
    def ur(self) -> Any: ...
    @property
    def ll(self) -> Any: ...
    @property
    def tuple(self) -> Any: ...
    @property
    def wkt(self) -> Any: ...
