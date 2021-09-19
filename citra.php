<?php

function biner($A, $B, $T, $N, $M)
{
    for ($i = 0; $i <= $N - 1; $i++) {

        for ($j = 0; $j <= $M - 1; $j++) {
            if ($A[$i][$j] < $T) {
                $B[$i][$j] = 0;
            } else {
                $B[$i][$j] = 1;
            }
        }
    }
}
